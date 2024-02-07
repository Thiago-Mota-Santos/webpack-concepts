import chalk from 'chalk'
import wrapAnsi from 'wrap-ansi';

function example () {
  const input = 'The quick brown ' + chalk.red('fox jumped over ') +
	'the lazy ' + chalk.green('dog and then ran away with the unicorn.');

  console.log(wrapAnsi(input, 20));
}

example()



  
