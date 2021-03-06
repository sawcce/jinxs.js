import './style.css';
import { el, txt } from '../../index';
import Component from '../../lib/Component';

let paragraphs = Component({
	render: (state) => [
		el({
			name: 'p',
			text: state.text,
		}),
		el({
			name: 'input',
			id: state.id,
		}),
		el({
			name: 'p',
			text: state.text,
			id: state.text,
		}),
		txt(`elo ${state.id}.`),
	],
	mount: () => console.log('Mounted !'),
	text: 'lorem ipsum',
	id: "dsfdf",
});

let button = Component({
	render(state) {
		return el({
			name: 'button',
			text: state.text,
			$click: () => {
				state.count = state.count + 1;
				state.text = `You clicked me ${state.count} ${
					state.count == 1 ? 'time' : 'times'
					}`;
			},
		});
	},
	text: 'Click me!',
	count: 0,
});

const app = document.querySelector('#app');

let par = paragraphs({text: "More like lorem ipsumn't"});
let btn1 = button();
let btn2 = button({text: "I'm a button!"});


par.appendTo(app);
btn1.appendTo(app);
btn2.appendTo(app);

setInterval(() => {par.state.id = Date.now(); }, 1000);