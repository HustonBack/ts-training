import { RandomHotel } from "./randomHotel";

const randomHotel = new RandomHotel('be');
async function init(): Promise<void> {
    await randomHotel.initialize();
    const sample: string = randomHotel.getRandomHotelName();
    console.log(sample);
}

init();
