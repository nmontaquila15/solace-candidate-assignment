import { Advocate } from "../types/advocate";
import formatPhoneNumber from "../utils/formatPhoneNumber";

type AdvocatesTableProps = {
  advocates: Advocate[];
};

export default function AdvocatesTable(props: AdvocatesTableProps) {
  const { advocates } = props;
  return (
    <div className="overflow-auto h-full w-full rounded-lg bg-slate-50 place-self-start shadow-lg">
      <table className="relative w-full">
        <thead>
          <tr>
            <th className="w-[10%] p-2 border-b-2 sticky top-0 bg-slate-200">
              First Name
            </th>
            <th className="w-[10%] p-2 border-b-2 sticky top-0 bg-slate-200">
              Last Name
            </th>
            <th className="w-[10%] p-2 border-b-2 sticky top-0 bg-slate-200">
              City
            </th>
            <th className="w-[5%] p-2 border-b-2 sticky top-0 bg-slate-200">
              Degree
            </th>
            <th className="p-2 border-b-2 sticky top-0 bg-slate-200">
              Specialties
            </th>
            <th className="w-[5%] p-2 border-b-2 sticky top-0 bg-slate-200">
              Years of Experience
            </th>
            <th className="w-[10%] p-2 border-b-2 sticky top-0 bg-slate-200">
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {advocates.map((advocate) => {
            return (
              <tr className="border-b last:border-b-0">
                <td className="p-2 text-center">{advocate.firstName}</td>
                <td className="p-2 text-center">{advocate.lastName}</td>
                <td className="p-2 text-center">{advocate.city}</td>
                <td className="p-2 text-center">{advocate.degree}</td>
                <td className="p-2">
                  <div className="w-full flex flex-wrap gap-1">
                    {advocate.specialties.map((s) => (
                      <div className="p-2 bg-slate-200 rounded-full">{s}</div>
                    ))}
                  </div>
                </td>
                <td className="p-2 text-center">
                  {advocate.yearsOfExperience}
                </td>
                <td className="p-2 text-center">
                  {formatPhoneNumber(advocate.phoneNumber)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
