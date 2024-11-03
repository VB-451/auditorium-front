import CoursePreviewServer from "@/app/components/course-preview/course-preview-server";
import styles from "./styles.module.css"

export default function Home() {
  return (
    <>
      <section>
          <div className={`w-full flex flex-row flex-wrap ${styles.courses}`}>
              <CoursePreviewServer data={{id:2, name:"English", teacher_id:2}} />
              <CoursePreviewServer data={{id:2, name:"English", teacher_id:2}} />
              <CoursePreviewServer data={{id:2, name:"English", teacher_id:2}} />
              <CoursePreviewServer data={{id:2, name:"English", teacher_id:2}} />
              <CoursePreviewServer data={{id:2, name:"English", teacher_id:2}} />
              <CoursePreviewServer data={{id:2, name:"English", teacher_id:2}} />
          </div>
      </section>
    </>
  );
}
