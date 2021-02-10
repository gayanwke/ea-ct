import React from 'react';
import { render, screen } from '@testing-library/react';
import { MusicFestivalsList } from './MusicFestivalsList';
import { sortRecordLabels, transformMusicFestivalsToRecordLabels } from './MusicFestivals.utils';
import { mockData } from './mockData';

describe('<MusicFestivalsList />', () => {
  const transformed = transformMusicFestivalsToRecordLabels(mockData);
  const sorted = sortRecordLabels(transformed);

  it('renders a no data message', () => {
    render(<MusicFestivalsList data={[]} />);
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });

  it('renders a music-festivals-list', () => {
    render(<MusicFestivalsList data={sorted} />);
    expect(screen.getByTestId('music-festivals-list')).toBeInTheDocument();
  });

  it('renders the correct number of lists and list items', () => {
    render(<MusicFestivalsList data={sorted} />);
    expect(screen.getAllByRole('list')).toHaveLength(17);
    expect(screen.getAllByRole('listitem')).toHaveLength(30);
  });

  it('renders record labels in the correct order', () => {
    render(<MusicFestivalsList data={sorted} />);
    const listitems = screen.getAllByRole('listitem');
    expect(listitems[0]).toContainHTML('*Independent/Unsigned Bands');
    expect(listitems[5]).toContainHTML('Anti Records');
    expect(listitems[22]).toContainHTML('Pacific Records');
  });

  it('renders bands in the correct order', () => {
    render(<MusicFestivalsList data={sorted} />);
    const listitems = screen.getAllByRole('listitem');
    expect(listitems[1]).toContainHTML('Squint-281');
    expect(listitems[3]).toContainHTML('Winter Primates');
  });

  it('renders festivals in the correct order', () => {
    render(<MusicFestivalsList data={sorted} />);
    const listitems = screen.getAllByRole('listitem');
    expect(listitems[16]).toContainHTML('LOL-palooza');
    expect(listitems[17]).toContainHTML('Trainerella');
    expect(listitems[18]).toContainHTML('Twisted Tour');
  });
});
