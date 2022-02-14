import './ResultPage.css';
import { Link } from 'react-router-dom';
import { WorldLifeExpectancy2021 } from './WorldLifeExpectancy2021';

function ResultPage() {
    const birthDate = new Date(localStorage.getItem('dob'));
    const sex = localStorage.getItem('sex');
    const country = localStorage.getItem('country');
    const today = new Date();
    const days = (today - birthDate) / (1000 * 60 * 60 * 24)
    const weeks = days / 7;
    let age = today.getFullYear() - birthDate.getFullYear();

    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    const menExpectancyWeeks = WorldLifeExpectancy2021.find(item => item.country === country).maleLifeExpectancyWeeks;
    const womenExpectancyWeeks = WorldLifeExpectancy2021.find(item => item.country === country).femaleLifeExpectancyWeeks

    let filledCells = [];

    for (let i = 0; i < Math.floor(weeks); i++) {
        filledCells.push(
            <div className='weekCell_filled' key={i}></div>
        )
    }

    let emptyCells = [];

    for (let i = 0; i < (sex === 'male' ? menExpectancyWeeks - Math.floor(weeks) : womenExpectancyWeeks - Math.floor(weeks)); i++) {
        emptyCells.push(
            <div className='weekCell' key={i}></div>
        )
    }

    return (
        <div className='resultPage'>
            <h1 className='result__title'>And now to the results:</h1>
            <div className='result__text-container'>
                <p className='result__text'>You are a young {age} years old {sex === 'male' ? 'man' : 'woman'}.</p>
                <p className='result__text'>If you made it up to this day you've already lived {Math.floor(days)} days or {Math.floor(weeks)} weeks.</p>
                <p className='result__text'>Average life expectancy for {sex === 'male' ? 'men' : 'women'} in {country} is about {sex === 'male' ? (menExpectancyWeeks / 52.1430).toFixed(1) : (womenExpectancyWeeks / 52.143).toFixed(1)} years (or {sex === 'male' ? menExpectancyWeeks : womenExpectancyWeeks} weeks).</p>
                <p className='result__text'>This means that your life calendar looks like this:</p>
            </div>
            <section className='grid'>
                <p className='gridLegendUp'>You lived this much</p>
                {filledCells}
                {emptyCells}
                <p className='gridLegendDown'>Statistically you have this little left to live</p>
            </section>
            <div className='summaryContainer'>
                <p className='summary__text'>So is the glass half-full or half-empty?</p>
                <p className='summary__text'>Don't you think it's time to quit procrastinating and start changing and influencing?</p>
                <p className='summary__text'>May be learn something new (like web development)? Or start a new career?</p>
                <p className='summary__text'>Or travel? Or volunteer?</p>
                <p className='summary__text'>For other cool <a className='summary__text' href='https://personalexcellence.co/blog/bucket-list/' target='_blank' rel="noreferrer noopener">"bucket list" ideas...</a></p>
            </div>
            <Link to='/' className='getBackLink'>To get back and check other person's Life Calendar...</Link>
        </div>
    )

}

export default ResultPage;