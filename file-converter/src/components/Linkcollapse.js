import React from 'react'

export const Linkcollapse = () => {
  return (
    <div>

<a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>

<div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div></div>
  )
}
