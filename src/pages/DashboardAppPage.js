import { Helmet } from "react-helmet-async";
import { faker } from "@faker-js/faker";
// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
// components
import Iconify from "../components/iconify";
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from "../sections/@dashboard/app";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Home | Biomnia </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          안녕하세요! 박연진 님 <br></br>오늘도 Biomnia와 함께 마이크로바이옴을
          챙겨봐요!
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Weekly Sales"
              total={714000}
              icon={"ant-design:android-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="New Users"
              total={1352831}
              color="info"
              icon={"ant-design:apple-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Item Orders"
              total={1723315}
              color="warning"
              icon={"ant-design:windows-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Bug Reports"
              total={234}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="마이크로바이옴 상태"
              subheader="(+31.4%) than last year"
              chartLabels={[
                "09/01/2022",
                "10/01/2022",
                "11/01/2022",
                "12/01/2022",
                "01/01/2023",
                "02/01/2023",
                "03/01/2023",
                "04/01/2023",
                "05/01/2023",
                "06/01/2023",
                "07/01/2023",
              ]}
              chartData={[
                {
                  name: "나의 마이크로바이옴",
                  type: "area",
                  fill: "gradient",
                  data: [22, 25, 20, 43, 38, 45, 40, 50, 55, 65, 70],
                },
                {
                  name: "우리 아이 마이크로바이옴",
                  type: "area",
                  fill: "gradient",
                  data: [30, 25, 36, 30, 45, 35, 55, 52, 59, 50, 67],
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: "America", value: 4344 },
                { label: "Asia", value: 5435 },
                { label: "Europe", value: 1443 },
                { label: "Africa", value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: "Italy", value: 400 },
                { label: "Japan", value: 430 },
                { label: "China", value: 448 },
                { label: "Canada", value: 470 },
                { label: "France", value: 540 },
                { label: "Germany", value: 580 },
                { label: "South Korea", value: 690 },
                { label: "Netherlands", value: 1100 },
                { label: "United States", value: 1200 },
                { label: "United Kingdom", value: 1380 },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={[
                "English",
                "History",
                "Physics",
                "Geography",
                "Chinese",
                "Math",
              ]}
              chartData={[
                { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
                { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
                { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(
                () => theme.palette.text.secondary
              )}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="나의 냉장고 관리"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: ["사과", "귀리", "양파", "토마토", "바나나"][index],
                description: [
                  "바이옴니아",
                  "바이옴니아",
                  "이마트",
                  "홈플러스",
                  "쿠팡",
                ][index],
                image: `/assets/images/home_image/re_${index + 1}.jpeg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="정기 배송 일정"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  "2023.07.24, 4주차, 47000원",
                  "2023.07.31, 1주차, 52000원",
                  "2023.08.07, 2주차, 58000원",
                  "2023.08.14, 3주차, 43000원",
                  "2023.08.21, 4주차, 50000원",
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: "FaceBook",
                  value: 323234,
                  icon: (
                    <Iconify
                      icon={"eva:facebook-fill"}
                      color="#1877F2"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Google",
                  value: 341212,
                  icon: (
                    <Iconify
                      icon={"eva:google-fill"}
                      color="#DF3E30"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Linkedin",
                  value: 411213,
                  icon: (
                    <Iconify
                      icon={"eva:linkedin-fill"}
                      color="#006097"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Twitter",
                  value: 443232,
                  icon: (
                    <Iconify
                      icon={"eva:twitter-fill"}
                      color="#1C9CEA"
                      width={32}
                    />
                  ),
                },
              ]}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: "1", label: "이번주 식단 추천 확인하기" },
                { id: "2", label: "이번달 내 마이크로바이옴 검사받기" },
                { id: "3", label: "이번달 예솔이 마이크로바이옴 검사받기" },
                { id: "4", label: "정기배송 날짜 신청하기" },
                { id: "5", label: "마늘 구매하기" },
                { id: "6", label: "사과 구매하기" },
                { id: "7", label: "레드와인 구매하기" },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
