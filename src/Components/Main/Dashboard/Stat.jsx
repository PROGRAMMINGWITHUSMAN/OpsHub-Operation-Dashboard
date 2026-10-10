

const Stat = ( { icon, title, value } ) => {
  return (
    <div className="bg-surface p-4 w-fit rounded-2xl border-surface-muted border">
      <div className="flex justify-center gap-4">
        <div className="bg-primary/10 rounded-2xl p-3">
          {icon}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-text-muted text-xl font-medium">{title}</p>
          <p className="text-text-primary font-bold text-3xl">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
