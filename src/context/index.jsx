import React from "react";
import { CallRequestProvider } from "./CallReqContext";
import { ResumeProvider } from "./ResumeContext";
import { CaseContextProvider } from "./CaseContext";
import { TestomoniralsProvider } from "./TestomoniralsContex";
import { VacanciesProvider } from "./VacanciesContext";
import { TeamProvider } from "./TeamContext";
import PartnersProvider from "./PartnersContext";

const MainContexProvider = ({ children }) => {
  return (
    <CallRequestProvider>
      <PartnersProvider>
          <ResumeProvider>
            <CaseContextProvider>
              <TestomoniralsProvider>
                <VacanciesProvider>
                  <TeamProvider>{children}</TeamProvider>
                </VacanciesProvider>
              </TestomoniralsProvider>
            </CaseContextProvider>
          </ResumeProvider>
      </PartnersProvider>
    </CallRequestProvider>
  );
};

export default MainContexProvider;
