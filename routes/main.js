const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain.js');
const clogin = require('../controller/Clogin.js');

router.get('/',controller.main);

router.get('/new/:userid',controller.newMain);

router.post('/signup',clogin.signUp)
router.post('/signIn',clogin.signIn)

router.post('/board',controller.boardPost)
router.post('/bookmark',controller.bookmarkPost)
router.post('/friendlist',controller.friendListPost)
router.post('/chatroom',controller.chatRoomPost)
router.post('/chatroomjoin',controller.chatRoomJoinPost)
router.post('/chatmessage',controller.chatMessagePost)


router.post('/delete/user',controller.deleteUser)
router.post('/delete/board',controller.deleteBoard)
router.post('/delete/friend',controller.deleteFriend)
router.post('/delete/chatroom',controller.deleteChatRoom)
router.post('/delete/chatroomjoin',controller.deleteChatRoomJoin)
router.post('/delete/chatmessage',controller.deleteChatMessage)

module.exports = router;