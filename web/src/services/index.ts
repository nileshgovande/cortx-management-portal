import loginRoutes from "./login/routes";
import alertRoutes from "./alerts/routes";
import systemConfigRoutes from "./onboarding/routes";
import statsRoutes from "./stats/routes";
import udxRoutes from "./udx/routes";
import userRoutes from "./user/routes";
import s3Routes from "./s3/routes";
import s3BucketRoutes from "./s3/bucket/routes";
import capacityRoutes from "./stats/capacity/routes";

export default [...loginRoutes, ...alertRoutes, ...systemConfigRoutes, ...statsRoutes, ...udxRoutes, ...userRoutes, ...s3Routes, ...s3BucketRoutes, ...capacityRoutes];