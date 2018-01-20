import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';

export default function StatusSection(props) {

  return (
    <section>
      <GuessCount />
      <GuessList />
    </section>
  );
}
