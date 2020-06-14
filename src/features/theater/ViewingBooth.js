import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import styles from './ViewingBooth.module.css';

import {
  Container,
  Input,
  Col,
  Row,
  Spinner
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import YouTubePlayer from 'react-player/lib/players/YouTube'

import VotingPoll from '../voting/VotingPoll'
import { getVideoInfo } from './videoSlice'

const ViewingBooth = (props) => {
  const [selectedUrl, setUrl] = useState("https://www.youtube.com/watch?v=4VHSa_vxLg4")
  const [activeVideo, setVideo] = useState({
    title: 'Serials @ The Flea: Online!',
    writers: null,
    directors: null,
    summary: "Five plays go in. Three plays survive. Your vote decides!"
  })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoInfo())
  })

  // REVIEW:
  // REVIEW: How to handle this appropriately!!
  // REVIEW:

  const videos = [
    useSelector(state => state.videos.data[0], shallowEqual),
    useSelector(state => state.videos.data[1], shallowEqual),
    useSelector(state => state.videos.data[2], shallowEqual),
    useSelector(state => state.videos.data[3], shallowEqual),
    useSelector(state => state.videos.data[4], shallowEqual)
  ]

  return (
    <Container>
      {/* Video Player */}
      <div className={styles.playerWrapper}>
        <YouTubePlayer
          url={selectedUrl}
          height="100%"
          width="100%"
          className={styles.reactPlayer}
          controls
          config={{
            youtube: {
              playerVars: {
                fs: 1,
                playsinline: 0
              }
            }
          }}
          />
      </div>
      <br />

      {/* Info Box */}
      <Container className={styles.infoBox} >
        <div>
          {
            window.innerWidth < 600 ?
              <h3><strong>{activeVideo.title}</strong></h3>
              :<h2><strong>{activeVideo.title}</strong></h2>
          }
        </div>
        <div className={styles.summaryBox}>
          <p>{activeVideo.summary || null}</p>
        </div>
        <Row>
          {
            activeVideo.writers &&
              <Col>
                <h4><strong>Writers:</strong></h4>
                <p>{activeVideo.writers}</p>
              </Col>
          }
          {
            activeVideo.director &&
              <Col>
                <h4><strong>Director:</strong></h4>
                <p>{activeVideo.director}</p>
              </Col>
          }
        </Row>
      </Container>

      {/* Selection / Voting Components */}
      <Row className={styles.thumbnailRow} >
        {
          !!videos[0] ?
            videos.map((video, i) => (
              <Col
                key={i}
                xs={i<4 ? "6" : "12"}
                sm={i<3 ? "4" : "6"}
                lg={{size: 'auto'}}
                >
                <div className={styles.thumbnailDiv}>
                  {/* Keep on top because of styling and how elements render */}
                  <div className={styles.thumbnailUnderlay}>
                    {i+1}
                  </div>
                  <div className={styles.videoDiv}>
                    <div
                      className={styles.videoThumbnail}
                      style={{backgroundImage: `url("${video.thumbnail}")`}}
                      onClick={() => {
                        setUrl(`${video.url}`);
                        setVideo(video)
                      }}
                    />
                  </div>
                </div>
              </Col>
            )) : <Col><Spinner /></Col>
        }
      </Row>
      <br />
      {
        localStorage.removeItem('serialsVoter')
      }
      {/* Voting check with cookie on local storage */}
      {
        localStorage.getItem('serialsVoter') ?
          <h3>You already voted!</h3>
          : <div>
              <h1><strong>VOTE</strong></h1>
              <br/>
              <VotingPoll videos={!!videos[0] && videos.map(vid => vid.id)} />
            </div>
      }
      <br />
      <br />
    </Container>
  )
}

export default ViewingBooth
