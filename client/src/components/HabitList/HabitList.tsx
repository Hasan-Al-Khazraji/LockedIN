import HabitCard from "./HabitCard/HabitCard";

export default function HabitList() {
    return (
        <div className="bg-[#0c1423] w-1/4 p-4 rounded-2xl drop-shadow-lg overflow-scroll no-scrollbar">
            <h2 className="font-bold text-3xl mb-4 ml-2">Habits</h2>
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