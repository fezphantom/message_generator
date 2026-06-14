const madlibGenerator = message => {
    return {
        message: message,
        adjectives: ['happy','brave','curious','gentle','bright',
            'fierce','creative','swift','patient','mysterious'],
        verbs: ['run','jump','swim','dance','sing','write','paint','explore','laugh','dream'],
        nouns: ['dog','cat','car','tree','house','book','flower','river','mountain','friend'],
        generate: function () {
            let generatedMessage = this.message;
            let messageSplit = generatedMessage.split(' ');
            for (let i = 0; i < messageSplit.length; i++) {
                if (messageSplit[i] === '(adjective)') {
                    let randomIndex = Math.floor(Math.random() * this.adjectives.length);
                    messageSplit[i] = this.adjectives[randomIndex];
                } else if (messageSplit[i] === '(verb)') {
                    let randomIndex = Math.floor(Math.random() * this.verbs.length);
                    messageSplit[i] = this.verbs[randomIndex];
                } else if (messageSplit[i] === '(noun)') {
                    let randomIndex = Math.floor(Math.random() * this.nouns.length);
                    messageSplit[i] = this.nouns[randomIndex];
                }
            }
            return messageSplit.join(' ');
        }
    }
}


let message = `One (adjective) morning, I decided to (verb) to the park with my pet (noun) .
 The weather was incredibly (adjective) ,so I packed a (noun) and headed out the door. On the way,
  I ran into my (adjective) neighbor, who was trying to (verb) a
 giant (noun) onto the roof of their house. I offered to help, but instead I 
 accidentally knocked over their (noun) and made it (verb) all the way down the street.
By the time we reached the park, my pet was so (adjective) that it started to (verb) in 
circles around a (noun) . Everyone stopped to stare. A (adjective) old man handed me a (noun) 
and said, "You should always carry one of these when things get (adjective) ."
I had no idea what he meant, but it was the most (adjective) day I'd ever had.`

let message2 = `Last (adjective) evening, I decided to (verb) through the town square with my 
trusty (noun) .
Everything seemed perfectly (adjective) until I spotted a (noun) balancing on top of a fountain.
Curious, I tried to (verb) closer, but my (adjective) shoelace got tangled around a nearby
 (noun) .
Before I knew it, a crowd had gathered to watch me (verb) in circles.
A particularly (adjective) spectator handed me a (noun) and insisted it would solve all my
 problems.
Instead, it caused a (adjective) chain reaction that sent a (noun) rolling across the square.

Soon everyone was trying to (verb) after it.
My (adjective) companion couldn't stop laughing as a (noun) appeared from nowhere and joined
 the commotion.
When things finally settled down, a (adjective) street performer gave me a (noun) as a souvenir.
I went home exhausted, wondering why every attempt to (verb) turns into such a
 (adjective) adventure.`;
let madlib = madlibGenerator(message);
console.log(madlib.generate());
console.log('*****************************');
console.log('Here is another madlib of first message:');
console.log(madlib.generate());
console.log('-----------------------------');
let madlib2 = madlibGenerator(message2);
console.log(madlib2.generate());
console.log('*****************************');
console.log('Here is another madlib of second message:');
console.log(madlib2.generate());