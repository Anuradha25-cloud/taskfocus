  export default function Progresstracker() {
  const completedTasks = tasks.filter((t) => t.completed).length;
      const totaltasks = tasks.length;
      const percentage = totaltasks == 0 ? 0: (completedTasks/totaltasks) * 100;
    return (
      <div>
        
      </div>
  );
}
