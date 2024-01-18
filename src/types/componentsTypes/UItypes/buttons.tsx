export type linkButtonArray = {
  label: string;
  to: string;
};
export interface linkButtonProps {
  isActive: boolean;
  label: string;
  to: string;
}
export type ButtonArray = {
  label: string;
};
export interface ButtonProps {
  isActive: boolean;
  label?: string;
  click?: () => void;
}
