import videoHomePage from '../../assets/video-homepage.webm';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted className="homepage-video">
                <source src={videoHomePage} type="video/webm" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Make forms worth filling out</div>
                <div className='description-1'>QuizApp is the easiest way to create and share quizzes</div>
                <div>
                    <button className='btn-1'>Get Started</button>
                </div>
            </div>
        </div>
    )
};

export default HomePage;