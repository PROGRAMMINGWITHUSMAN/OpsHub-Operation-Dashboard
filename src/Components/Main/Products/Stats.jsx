const Stats = ({ value, text, icon }) => {
  return (
    <div className="bg-surface p-5 rounded-2xl border border-surface-muted w-full">
      <div className="flex items-center justify-center sm:justify-start gap-4">
        <div className="bg-primary/10 rounded-2xl p-3 shrink-0">{icon}</div>
        <div className="flex flex-col">
          <p className="text-text-muted text-base font-medium">{text}</p>
          <p className="text-text-primary font-bold text-3xl">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;