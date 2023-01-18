interface HabitProp {
    completed: number
}

function Habit(prop: HabitProp) {
    return (
        <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">
            {prop.completed}
        </div>
    );
}

export default Habit;