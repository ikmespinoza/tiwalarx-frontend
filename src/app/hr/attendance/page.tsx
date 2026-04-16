import { HrTabs } from "@/components/hr/_shared/HrTabs";
import { AttendanceClient } from "@/components/hr/attendance/AttendanceClient";

export default function AttendancePage() {
  return (
    <>
      <HrTabs />
      <AttendanceClient />
    </>
  );
}
