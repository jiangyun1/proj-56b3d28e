/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : yiqingchurumgchartschoolcar_ssm4

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2022-04-12 22:54:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for wct_car
-- ----------------------------
DROP TABLE IF EXISTS `wct_car`;
CREATE TABLE `wct_car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chepai` varchar(255) DEFAULT NULL,
  `xinghao` varchar(500) DEFAULT NULL,
  `zaizhong` varchar(10) DEFAULT NULL,
  `statecn` varchar(200) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `carinfo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_car
-- ----------------------------
INSERT INTO `wct_car` VALUES ('7', '渝A808858', '宝妈x1', '2000', '正常', '小兰', '8', '渝A808858 宝妈x1 车位:2000kg');
INSERT INTO `wct_car` VALUES ('8', '渝B22222', '面包车', '129', '正常', '小兰', '8', '渝B22222 面包车 车位:129kg');
INSERT INTO `wct_car` VALUES ('9', '渝B23134', '宝妈x1', '23', '正常', '小美', '9', '渝B23134 宝妈x1 车位:23kg');
INSERT INTO `wct_car` VALUES ('10', '渝B112334', '三菱', '', '正常', '小李', '44', '');

-- ----------------------------
-- Table structure for wct_notice
-- ----------------------------
DROP TABLE IF EXISTS `wct_notice`;
CREATE TABLE `wct_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_notice
-- ----------------------------
INSERT INTO `wct_notice` VALUES ('19', '疫情管控通知', '<p>这里是详细的新闻资讯的详细内容</p><p>加强防疫意识</p><p>非必要不得请假进校</p><p>不得去高风险地区</p><p><img src=\"upload/28b39707-c66e-48f7-b367-e78efba3d196.jpg\" style=\"max-width:100%;\"><br></p><p><img src=\"upload/1e3d425a-fc86-4742-bd07-95618dbbaf8f.jpg\" style=\"max-width:100%;\"><br></p>', '2022-04-11 16:25:33', '', '34731bab-dd8d-4290-9f74-b3b7495ad458.jpg');
INSERT INTO `wct_notice` VALUES ('20', '大家加强疫情防控', '<p>这里是详细的通知公告的详细内容给</p><p><img src=\"upload/482d18b5-c004-42d9-98c9-ebd4073fc75c.jpg\" style=\"max-width:100%;\"><br></p>', '2022-04-11 16:25:35', '', 'ffa24a85-17fb-49f3-b11c-8f72619a4106.jpg');

-- ----------------------------
-- Table structure for wct_posts
-- ----------------------------
DROP TABLE IF EXISTS `wct_posts`;
CREATE TABLE `wct_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_posts
-- ----------------------------
INSERT INTO `wct_posts` VALUES ('3', '可以发帖交流', '这里是交流内容', '32', '小新', '2022-04-10 9:14:50', '', '分享');
INSERT INTO `wct_posts` VALUES ('4', '一起说说疫情', '疫情为什么如此反复啊', '43', '小王', '2022-04-10 9:48:32', '', '1');
INSERT INTO `wct_posts` VALUES ('5', '可以还饿反馈', '这里是要反馈的详细内容', '41', '小美', '2022-04-10 19:36:7', '', '1');
INSERT INTO `wct_posts` VALUES ('6', '加强针重要吗', '这里是要交流的详细内容', '43', '小王', '2022-04-10 11:7:35', '', '1');

-- ----------------------------
-- Table structure for wct_record
-- ----------------------------
DROP TABLE IF EXISTS `wct_record`;
CREATE TABLE `wct_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `typecn` varchar(50) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_record
-- ----------------------------
INSERT INTO `wct_record` VALUES ('6', '小美', '2022-04-10  18:00:16', '进校', '41', null);
INSERT INTO `wct_record` VALUES ('7', '小美', '2022-04-10  18:06:58', '进校', '41', null);
INSERT INTO `wct_record` VALUES ('8', '小美', '2022-04-10  13:58:23', '进校', '41', '<p>备注</p>');
INSERT INTO `wct_record` VALUES ('9', '小王', '2022-04-10 14:01:30', '进校', '43', '<p>备注</p>');
INSERT INTO `wct_record` VALUES ('10', '小王', '2022-04-10 18:13:26', '进校', '43', '');
INSERT INTO `wct_record` VALUES ('11', '小王', '2022-04-10 18:17:09', '进校', '43', '');
INSERT INTO `wct_record` VALUES ('12', 'admin', '2022-04-10 18:19:02', '进校', '1', '');

-- ----------------------------
-- Table structure for wct_replay
-- ----------------------------
DROP TABLE IF EXISTS `wct_replay`;
CREATE TABLE `wct_replay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(10) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `hot` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_replay
-- ----------------------------
INSERT INTO `wct_replay` VALUES ('15', '3', '回复app交流讨论', '', '', '2022-04-10 09:45:36', null, '');
INSERT INTO `wct_replay` VALUES ('16', '3', '回复交流讨论,反馈等', '', '', '2022-04-10 19:33:32', null, '');
INSERT INTO `wct_replay` VALUES ('17', '5', '阿萨德发生的', '43', '', '2022-04-10 11:7:42', '1', '');
INSERT INTO `wct_replay` VALUES ('18', '4', '可以发帖反馈交流,自己可以删除', '43', '', '2022-04-10 11:11:25', '1', '');
INSERT INTO `wct_replay` VALUES ('19', '3', '回复用户反馈', '', '', '2022-04-10 22:05:57', null, '');
INSERT INTO `wct_replay` VALUES ('20', '6', '一起交流讨论反馈', '42', '', '2022-03-28 22:9:35', '1', '');
INSERT INTO `wct_replay` VALUES ('21', '5', '这里可以交流讨论', '42', '', '2022-3-31 11:8:52', '1', '');

-- ----------------------------
-- Table structure for wct_settings
-- ----------------------------
DROP TABLE IF EXISTS `wct_settings`;
CREATE TABLE `wct_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `xjsdate` varchar(50) DEFAULT NULL,
  `xjedate` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_settings
-- ----------------------------

-- ----------------------------
-- Table structure for wct_shangbao
-- ----------------------------
DROP TABLE IF EXISTS `wct_shangbao`;
CREATE TABLE `wct_shangbao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tiwen` varchar(50) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `xingcheng` varchar(50) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `uid` int(10) DEFAULT NULL,
  `ymjz` varchar(255) DEFAULT NULL,
  `jcky` varchar(255) DEFAULT NULL,
  `jkzk` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `idcard` varchar(255) DEFAULT NULL,
  `menpai` varchar(255) DEFAULT NULL,
  `lyd` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gaowen` int(1) DEFAULT NULL,
  `leibie` varchar(255) DEFAULT NULL,
  `jkm` varchar(255) DEFAULT NULL,
  `xcm` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_shangbao
-- ----------------------------
INSERT INTO `wct_shangbao` VALUES ('2', '36.4', '111', '2022-04-10 16:09:59', '重庆', '小王', '43', '一次', '否', '普通', '波仔', '5003423452345', '39-12-1', '重庆', '重庆市渝中区人民路232号', '0', '普通', null, null);
INSERT INTO `wct_shangbao` VALUES ('3', '36.7', '备注信息', '2022-04-10 18:15:27', '居家', '小美', '41', '一次', '否', '普通', '小美', '500227198807231634', '380-2-2', '重庆', '重庆市渝中区人民路232号', '0', '普通', null, null);
INSERT INTO `wct_shangbao` VALUES ('6', '38.1', '无不适', '2022-03-31', '重庆', '小新', '42', '一次', '否', '发烧', '小新', '5002274616494548', '6-120', '重庆', '重庆市渝中区人民路232号', '1', '黄码', null, null);
INSERT INTO `wct_shangbao` VALUES ('7', '37.6', '', '2022-04-11', '重庆-学校', '小新', '42', '一次', '否', '普通', '小新', '500234453423434', '', '重庆', '某某地址', '1', '绿码', null, null);

-- ----------------------------
-- Table structure for wct_user
-- ----------------------------
DROP TABLE IF EXISTS `wct_user`;
CREATE TABLE `wct_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `passwd` varchar(50) DEFAULT NULL,
  `roletype` varchar(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `qq` varchar(20) DEFAULT NULL,
  `wechat` varchar(50) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `birth` varchar(20) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `statecn` varchar(255) DEFAULT NULL,
  `ymjz` varchar(255) DEFAULT NULL,
  `jcky` varchar(255) DEFAULT NULL,
  `jkzk` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `idcard` varchar(255) DEFAULT NULL,
  `menpai` varchar(255) DEFAULT NULL,
  `lyd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_user
-- ----------------------------
INSERT INTO `wct_user` VALUES ('1', 'admin', 'admin', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `wct_user` VALUES ('41', '小美', '111111', '2', '', '15123385885', '', '', '', '', '47b9034d-670c-4e1d-bf09-f2302b549475.jpg', '39-11-1', '', '正常', null, null, null, null, null, null, null);
INSERT INTO `wct_user` VALUES ('42', '小新', '111111', '2', '', '15123385885', '', '', '', '', '7a2b8367-63d0-4cd8-add1-371081dbd571.jpg', '39-22-2', '', '正常', null, null, null, null, null, null, null);
INSERT INTO `wct_user` VALUES ('43', '小王', '111111', '2', '', '15123378778', '', '', '', '', 'ebbc6fdf-e251-458e-a485-6656977d35ff.jpg', '39-19-1', '', '正常', null, null, null, null, null, null, null);
INSERT INTO `wct_user` VALUES ('44', '小李', '111111', '2', '', '1512338585', '', '', '', '', '17ae1dda-0eb8-4d3b-b3bf-03348345ef58.jpg', '39-2-2', '', '正常', null, null, null, null, null, null, null);
INSERT INTO `wct_user` VALUES ('45', 'gongzuorenyuan', '111111', '1', '', '15123385885', '', '', '', '', '', '', '', '正常', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for wct_yuyue
-- ----------------------------
DROP TABLE IF EXISTS `wct_yuyue`;
CREATE TABLE `wct_yuyue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `statecn` varchar(50) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `btype` int(10) DEFAULT NULL,
  `fenlei` varchar(255) DEFAULT NULL,
  `mudi` varchar(255) DEFAULT NULL,
  `chepai` varchar(255) DEFAULT NULL,
  `hsbg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_yuyue
-- ----------------------------
INSERT INTO `wct_yuyue` VALUES ('7', '波仔', '2022-03-31 11:01:14', '同意', '15123385885', '走亲戚', null, null, '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('12', '小王', '2022-04-10 22:00:12', '同意', '15123385885', '走亲戚', '43', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('13', '小美', '2022-04-10 19:27:03', '已送出', '', '蔬菜若干,使用油', '41', '', '2', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('14', '小美', '2022-04-10 19:36:44', '待处理', '', '需要大米10斤,蔬菜什么什么的', '41', '', '2', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('15', '小美', '2022-04-10 18:21:21', '同意', '152337775', '这里填写进校原因', '41', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('16', '小王', '2022-04-10T11:07', '待审核', '16123384885', '走亲戚,可以配图可以不配图', '43', '', null, null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('17', '小王', '2022-04-10 11:08:29', '待处理', '', '家里需要大米食用油', '43', '', '2', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('18', '小王', '2022-03-28 14:47:13', '待处理', '', '加强针', '43', '', '3', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('19', '小王', '2022-04-10 11:11:54', '待处理', '', '需要新鲜蔬菜供一周食用', '43', '', '2', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('20', '小王', '2022-04-10', '待处理', '', '第二针', '43', '', '3', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('21', '小王', '2022-04-10T11:13', '待审核', '15122374774', '走亲戚', '43', '', null, null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('22', '小美', '2022-04-10 22:04:37', '同意', '16123385885', '12323', '41', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('23', '小美23', '2022-03-28 14:47:52', '同意', '14123385885', '1212', '41', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('24', '小新', '2022-03-12T22:09', '待审核', '15123378778', '走亲戚', '42', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('26', '小王', '2022-03-26', '待处理', '', '过来聚会', '43', '', '4', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('27', '小美', '2022-03-18T18:14', '待审核', '15123385885', '需进校办事儿', '41', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('28', '小新', '2022-03-24T15:01', '待审核', '15123385885', '这里详细填写进校的原因', '42', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('29', '小新', '2022-03-23T15:05', '待审核', '1512332332', '这里是详细的申请说明', '42', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('30', '小新', '2022-03-23', '待处理', '', '父母来送东西', '42', '', '4', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('31', '小新', '2022-04-01T11:07', '待审核', '15123385885', '我要进校去办理业务，可以配图证明', '42', '', '1', null, null, null, null);
INSERT INTO `wct_yuyue` VALUES ('32', '小新', '2022-04-11 16:24:50', '同意', '14123385885', '进校探访', '42', '93323287-2475-40e7-8ee7-89644780ee46.jpg', '1', '校外人员', '家长到访', '渝A808858', null);
INSERT INTO `wct_yuyue` VALUES ('33', '小新', '2022-04-14T16:28', '待审核', '15123373773', '详细备注说明', '42', '00fe0f8d-17ff-4389-ba4c-abd96c6954d2.jpg', '1', '校外人员', '家长到访', '', null);

-- ----------------------------
-- Table structure for wct_yuyuereplay
-- ----------------------------
DROP TABLE IF EXISTS `wct_yuyuereplay`;
CREATE TABLE `wct_yuyuereplay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(10) DEFAULT NULL,
  `note` varchar(500) DEFAULT NULL,
  `uid` varchar(10) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `ndate` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `hot` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wct_yuyuereplay
-- ----------------------------
INSERT INTO `wct_yuyuereplay` VALUES ('15', '3', '回复app交流讨论', '', '', '2022-04-10 09:45:36', null, '');
INSERT INTO `wct_yuyuereplay` VALUES ('16', '13', '你需要的货物已送出', '', '', '2022-04-10 19:27:52', null, '');
INSERT INTO `wct_yuyuereplay` VALUES ('17', '13', '物资一送达您的手中', '', 'admin', '2022-04-10 19:31:32', null, '');
INSERT INTO `wct_yuyuereplay` VALUES ('18', '14', '已安排', '', 'admin', '2022-04-10 22:00:32', null, '');
INSERT INTO `wct_yuyuereplay` VALUES ('19', '17', '已安排', '', 'admin', '2022-04-10 22:04:53', null, '');
INSERT INTO `wct_yuyuereplay` VALUES ('20', '26', '可以回复申请', '', 'admin', '2022-03-28 14:46:53', null, '');
