import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const jobs = [
  { id: 1, title: "Frontend Developer", location: "Remote" },
  { id: 2, title: "Backend Developer", location: "New York" },
];

const Careers = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Career Opportunities</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>
                <Link to={`/careers/${job.id}`} className="hover:text-blue-500">
                  {job.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Location: {job.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Careers;
