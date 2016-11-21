-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 21/11/2016 às 20:16
-- Versão do servidor: 5.5.38-0ubuntu0.14.04.1
-- Versão do PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `renner_pdv`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(12) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `marca` varchar(40) NOT NULL,
  `preco` decimal(6,2) NOT NULL,
  `quantidade` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Fazendo dump de dados para tabela `produtos`
--

INSERT INTO `produtos` (`id`, `codigo`, `nome`, `marca`, `preco`, `quantidade`) VALUES
(1, '789456', 'Blusa ', 'Hard Rock', 500.00, 12),
(2, '123455', 'Chinelo', 'Havaianas', 17.00, 10),
(3, '456932', 'Calça', 'Diesel', 199.00, 5),
(4, '456932', 'Bermuda', 'Hurley', 250.00, 6),
(5, '55555', 'Blusa', 'Adidas', 44.00, 5),
(6, '742136', 'Shorts', 'Hering', 39.50, 9),
(10, '678903', 'Cachicol', 'Nike', 2990.00, 4);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
