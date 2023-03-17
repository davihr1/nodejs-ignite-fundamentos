

// process.stdin
// .pipe(process.stdout)

// streams do total zero 
import { Readable, Writable, Transform } from 'node:stream';

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

//BUffer => transacionar dados entre Streams 

class InverseNunberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

class MultiplayByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}


//read data
new OneToHundredStream()

//transform data
.pipe(new InverseNunberStream())

//write data
.pipe(new MultiplayByTenStream())