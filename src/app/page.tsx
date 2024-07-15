import { EventCard } from "@/components/EventCard";
import { Title } from "@/components/Title";
import { EventModel } from "@/models";
import Image from "next/image";

export default function HomePage() {
  const events: EventModel[] = [
    {
      id: "1",
      name: "Evento 1",
      organization: "Empresa 1",
      date: "2024-01-01T10:00:00.000Z",
      location: "São Paulo",
    },
    {
      id: "2",
      name: "Evento 2",
      organization: "Empresa 2",
      date: "2024-01-01T10:00:00.000Z",
      location: "São Paulo",
    },
  ];
  return (
    <main>
      <Title>Eventos disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
