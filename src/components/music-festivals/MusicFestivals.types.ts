export const FETCH_STATUS = {
  IDLE: 'Idle',
  LOADING: 'Loading',
  SUCCESS: 'Success',
  ERROR: 'Error',
} as const;

export type FetchStatus = typeof FETCH_STATUS[keyof typeof FETCH_STATUS];

export interface Band {
  name: string;
  recordLabel?: string;
}

export interface RecordLabel {
  recordLabel?: string;
}

export interface Festival {
  festivals: string[];
}

type MusicFestivalBands = Band & RecordLabel;
type RecordLabelBands = Band & Festival;

export interface MusicFestival {
  name?: string;
  bands: MusicFestivalBands[];
}

export interface FestivalsAPIResponse {
  data: MusicFestival[];
}

export interface RecordLabels {
  name: string;
  bands: RecordLabelBands[];
}
