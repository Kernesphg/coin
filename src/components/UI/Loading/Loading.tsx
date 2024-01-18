import './loading.css';

export const Loading = () => {
  return (
    <div className="flex gap-3 items-center">
      <span className="loader"></span>
      <p className="text-2xl">Загрузка...</p>
    </div>
  );
};
