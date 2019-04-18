import { RandomHotel } from './randomHotelAlt'

const randomHotel = new RandomHotel('nl', 'production');
async function init(): Promise<void> {
    await randomHotel.initialize();
    const sample: string = randomHotel.getRandomHotelName();
    console.log(sample);
}

init();
