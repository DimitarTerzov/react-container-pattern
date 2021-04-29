import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function CaptionView({count}) {

  return (
    <div>
      <Chip label={`You clicked: ${count} times!`} />
    </div>
  )
}
