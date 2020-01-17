import React from 'react';

type GreetingsProps = {
	name: string;
	mark?: string;
	onClick: (name: string) => void;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!', onClick }) => {
	const handleClick = () => onClick(name);
	return (
		<div>
			Hello {name} {mark}
			<div>
				<button onClick={handleClick}>Click Me</button>
			</div>
		</div>
	);
};

// 이런식으로 사용하면 제대로 작동하지 않음 undefind or string으로 type이 정의됨
// function으로 만들면 정상동작함
Greetings.defaultProps = {
	mark: '!'
};

export default Greetings;
