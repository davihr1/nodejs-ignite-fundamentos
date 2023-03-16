

// process.stdin
// .pipe(process.stdout)

// streams do total zero 
import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1

    // método readble obrigatório 
    _read() {
        const i = this.index++

       setTimeout(() => {
        if( i > 100) {
            this.push(null);
        } else {

            //comverter no formato buffer
            const buf = Buffer.from(String(i))

            this.push(buf)
        }
       }, 1000)
    }
}

new OneToHundredStream().pipe(process.stdout)