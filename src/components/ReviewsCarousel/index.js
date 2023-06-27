import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

const left = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const right = 'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png '

class ReviewsCarousel extends Component {
  state = {user: reviewsList[0]}

  toRight = () => {
    const {user} = this.state
    const currentIndex = reviewsList.indexOf(user)
    const nextIndex = currentIndex + 1
    if (nextIndex <= 3) {
      this.setState({user: reviewsList[nextIndex]})
    }
  }

  toLeft = () => {
    const {user} = this.state
    const currentIndex = reviewsList.indexOf(user)
    const nextIndex = currentIndex - 1
    if (nextIndex >= 0) {
      this.setState({user: reviewsList[nextIndex]})
    }
  }

  render() {
    const {user} = this.state
    const {companyName, description, imgUrl, username} = user

    return (
      <div className="main-container">
        <div className="direction">
          <button
            type="button"
            className="next-icons"
            onClick={this.toLeft}
            data-testid="leftArrow"
          >
            <img src={left} alt="left arrow" />
          </button>
        </div>
        <div className="rev-container">
          <h1 className="head">Reviews</h1>
          <div className="list-items">
            <img src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="descrip">{description}</p>
          </div>
        </div>
        <div className="direction">
          <button
            type="button"
            className="next-icons"
            onClick={this.toRight}
            data-testid="rightArrow"
          >
            <img src={right} alt="right arrow" />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
