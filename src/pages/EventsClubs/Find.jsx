import { CalendarDays, Users, Video } from 'lucide-react';
import { Link, useParams } from 'react-router';
import Container from '../../components/Container/Container';

const Find = () => {
  const { query } = useParams();

  const source = query.split('=')[1].toLowerCase();

  return (
    <Container className="mt-10">
      {/* Select Events Or Clubs */}
      <div className="flex items-center gap-2.5">
        <Link
          to="/find/source=Events"
          className={`text-[#232326] text-sm font-semibold flex items-center gap-2 py-2 px-3 ${
            source === 'events' &&
            'bg-[#1212150c] border border-[#12121519] rounded-full'
          }`}
        >
          <CalendarDays size={14} /> Events
        </Link>
        <Link
          to="/find/source=Clubs"
          className={`text-[#232326] text-sm font-semibold flex items-center gap-2 py-2 px-3 ${
            source === 'clubs' &&
            'bg-[#1212150c] border border-[#12121519] rounded-full'
          }`}
        >
          <Users size={14} /> Clubs
        </Link>
      </div>

      <div className="pt-5 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-3xl font-bold">Events For You</h1>

        <div className="space-x-4">
          <select
            defaultValue="Any Type"
            className="select outline-0 rounded-full type w-40"
          >
            <option value="">Any Type</option>
            <option value="online">Online</option>
            <option value="inPerson">In Person</option>
          </select>
          <select
            defaultValue="Category"
            className="select outline-0 rounded-full type w-40"
          >
            <option value="">Category</option>
            <option value="online">Social Activities</option>
            <option value="inPerson">Hobbies & Passions</option>
            <option value="inPerson">Sports & Fitness</option>
            <option value="inPerson">Travel & Outdoor</option>
          </select>
        </div>
      </div>
      <div className="divider my-5 text-[#d0d0d4]"></div>

      {/* Event and group card */}
      <section></section>
    </Container>
  );
};

export default Find;
