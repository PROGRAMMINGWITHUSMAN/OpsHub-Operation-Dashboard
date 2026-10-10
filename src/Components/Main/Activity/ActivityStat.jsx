
const ActivityStat = ({ icon, title, value }) => {
  return (
    <div className="bg-surface p-5 rounded-2xl border border-surface-muted flex-1">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 rounded-2xl p-3">{icon}</div>
        <div className="flex flex-col">
          <p className="text-text-muted text-base font-medium">{title}</p>
          <p className="text-text-primary font-bold text-3xl">{value}</p>
        </div>
      </div>
    </div>
  );
};  

export default ActivityStat 