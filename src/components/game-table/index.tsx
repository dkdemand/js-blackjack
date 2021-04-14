import React from 'react'
import './GameTable.css'

type Props = {
	playerChips: number,
	dealerChips: number,
	playerCards: Array<Array<any>>,
	dealerCards: Array<Array<any>>
}

const GameTable = ({ playerChips, dealerChips, playerCards, dealerCards }: Props) => {
  return (
    <div className='game-table'>
			<div className='dealer '>
				Dealer
				<div className='chips'>
					Chips: {dealerChips}
				</div>
				<div className='card-holder'></div>
			</div>
			<div className='player'>
				<div className='card-holder'></div>
				Player one
				<div className='chips'>
					Chips: {playerChips}
				</div>
				<div className='controls'>
					<div className='bet'>
						<input type='text' value='' />
						<button>Bet</button>
					</div>

					<button className='hit'>Hit</button>
					<button className='stay'>Stay</button>
				</div>
			</div>
    </div>
  )
}

export default GameTable