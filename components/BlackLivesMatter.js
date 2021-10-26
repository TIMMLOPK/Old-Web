import React from 'react'

const DONATE_LINK = `www.google.com`

function BlackLivesMatter() {
  return (
    <div className="support-blm">
      <span>
        Website <strong></strong>{' '}

        <a href={DONATE_LINK} target="_blank" rel="noopener noreferrer nofollow">
          Follow now!
        </a>
      </span>
    </div>
  )
}

export default BlackLivesMatter
