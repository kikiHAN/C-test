-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-10-27 09:26:40
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping2`
--

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `details` varchar(500) NOT NULL,
  `amount` int(11) NOT NULL,
  `classify` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `pic` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `title`, `price`, `details`, `amount`, `classify`, `status`, `pic`) VALUES
(3, '11', 22, '33', 44, 0, 1, NULL),
(4, 'qq', 22, 'ee', 55, 0, 1, NULL),
(6, 'ww', 33, 'ff', 4, 4, 1, NULL),
(7, 'dell', 4000, '戴尔笔记本', 200, 0, 1, NULL),
(11, 'dd', 4, '订单', 6, 1, 1, NULL),
(16, '小米5', 2999, '小米发烧友', 666, 0, 1, NULL),
(17, '夏威夷果', 20, '三只松鼠', 1000, 2, 1, NULL),
(18, '水杯', 10, '富光', 1000, 3, 0, NULL),
(19, '耳钉', 33, 's925', 300, 3, 0, NULL),
(20, '11', 11, '11', 11, 0, 0, NULL),
(21, '扔出神烦', 999, '网络用语', 666, 2, 1, NULL),
(22, '反复', 444, '反反复复', 2, 2, 1, NULL),
(23, '擦擦擦', 44, '66', 77, 3, 1, NULL),
(24, 'skin79', 100, '柔肤水', 98, 2, 1, NULL),
(25, 'fppp', 55, '555', 55, 4, 0, NULL),
(26, '被子--南极人 夏被 亲肤柔软空调被 清凉夏被 奶白-深灰 150*200cm', 55, '夏凉被特别凉快冬暖夏凉，，，夏凉被特别凉快冬暖夏凉，，，夏凉被特别凉快冬暖夏凉，，，夏凉被特别凉快冬暖夏凉，，，夏凉被特别凉快冬暖夏凉，，，夏凉被特别凉快冬暖夏凉，，，夏凉被特别凉快冬暖夏凉，，，夏凉被特别凉快冬暖夏凉，，夏凉被特别凉快冬暖夏凉', 300, 2, 1, '1476768504.1808.jpg'),
(27, 'ddd', 123, '123', 123, 4, 1, NULL),
(28, 'dddd12', 123, '123', 123, 4, 1, NULL),
(29, 'mmm', 123, '13', 1, 3, 1, NULL),
(30, 'loveMe', 29, '暖心著作', 12222, 2, 1, '1476768567.2284.com.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
