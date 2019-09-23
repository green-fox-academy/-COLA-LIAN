abstract class Reservation{
    abstract getDowBooking(): string;
    abstract getCodeBooking(): string;
}

function randomInt(min: number, max: number): number {
    var Range = max - min;
    var Rand = Math.random();
    return(min + Math.round(Rand * Range));
}

function randomString(len:number){
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var maxPos = chars.length;
    var str = '';
    for (var i=0; i< len; i++){
        str += chars.charAt(Math.floor(Math.random() * maxPos));    
    }
    return str;
}

class BookReservation extends Reservation{
    getDowBooking():string {
        let arr1 = ['MON','THU','WED','THU','FRI','SAT','SUN'];
        return arr1[randomInt(0,6)]
    }

    getCodeBooking():string{
        return randomString(8);
    }
}


let book = new BookReservation();
for(var i = 0; i < 10; i++){
    console.log(`Booking# ${book.getCodeBooking()} for ${book.getDowBooking()}`);
}

