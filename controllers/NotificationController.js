// controllers/NotificationController.js
const Notification = require('../models/Notification');

// For direct calls from other controllers
// Modify the createNotification function in NotificationController.js
exports.createNotification = async (req, recipientId, message, type, senderId, relatedItemId, referenceId) => {
  try {
    const notification = new Notification({
      recipient: recipientId,
      message: message,
      type: type,
      sender: senderId,
      relatedItem: relatedItemId,
      referenceId: referenceId
    });
    await notification.save();
    
    // Send real-time notification if user is online
    // Check if req is a valid object with app property
    const io = req && req.app ? req.app.get('io') : (req && req.app ? req.app : null);
    const connectedUsers = req && req.app ? req.app.get('connectedUsers') : (global.app ? global.app.get('connectedUsers') : null);
    
    if (io && connectedUsers && connectedUsers[recipientId]) {
      const populatedNotification = await Notification.findById(notification._id)
        .populate('sender', 'username avatar');
        
      io.to(connectedUsers[recipientId]).emit('new_notification', {
        notification: populatedNotification
      });
    }
    
    return notification;
  } catch (error) {
    console.error('Failed to create notification:', error);
    throw error;
  }
};

// For HTTP API calls
exports.createNotificationAPI = async (req, res) => {
  try {
    const { recipientId, message, type, referenceId } = req.body;
    
    const notification = await exports.createNotification(
      req, 
      recipientId, 
      message, 
      type, 
      req.user._id, 
      referenceId
    );
    
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create notification' });
  }
};

exports.getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.user._id })
      .sort({ createdAt: -1 })
      .populate('sender', 'username')
      .limit(50);
      
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
    res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update notification' });
  }
};

exports.markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      { recipient: req.user._id, isRead: false },
      { isRead: true }
    );
    res.status(200).json({ message: 'All notifications marked as read' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update notifications' });
  }
};

exports.getUnreadCount = async (req, res) => {
  try {
    const count = await Notification.countDocuments({
      recipient: req.user._id,
      isRead: false
    });
      
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch unread count' });
  }
};