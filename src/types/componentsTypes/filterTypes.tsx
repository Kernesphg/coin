export type changeProperty = {
  label: string;
  value: string;
};

export interface filterProps {
  data: any[];
  // setCurrentValue: (value: fiat | changeProperty | undefined) => void;
  // currentValue: fiat | changeProperty;
  renderCurrentItem: React.ReactNode; //нужно исправить any
  renderItem: (item: any) => React.ReactNode; //нужно исправить any
}
