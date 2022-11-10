import React, { useState, FC } from 'react';
import { Button } from '../button/Button';
import { TypesPizza } from '../types-pizza/TypesPizza';
import styles from './card.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiRuble } from 'react-icons/bi';

interface ICard {
	imageUrl: string;
	title: string;
	price: number;
}

export const Card: FC<ICard> = ({ imageUrl, title, price }) => {
	const [n, setN] = useState(0);

	const handleClick = () => {
		setN(n + 1);
	};

	return (
		<div className={styles.card}>
			<img className={styles.img} src={imageUrl} alt={title} />
			<h2 className={styles.title}>{title}</h2>
			<TypesPizza />
			<div className={styles.boxPrice}>
				<div className={styles.boxPriceText}>
					<p className={styles.price}>{price}</p>
					<BiRuble className={styles.priceIcon} />
				</div>
				<Button onClick={handleClick} disabled={false} type='button' size='small'>
					<div className={styles.addBox}>
						<AiOutlinePlus className={styles.addIcon} />
						<p className={styles.addText}>Добавить</p>
						<div className={styles.addNumber}>
							<p className={styles.addNumberText}>{n}</p>
						</div>
					</div>
				</Button>
			</div>
		</div>
	);
};