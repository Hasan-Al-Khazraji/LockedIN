import HabitCard from "./HabitCard/HabitCard";

export default function HabitList() {
    return (
        <div className="bg-[#0c1423] h-[50%] w-1/4 p-4 rounded-2xl drop-shadow-lg overflow-scroll no-scrollbar">
            <h2 className="font-bold text-3xl text-center mb-4">Habits</h2>
            <ul>
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
                <HabitCard />
            </ul>
        </div>
    )
}