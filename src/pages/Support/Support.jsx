import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { IoChatboxOutline } from "react-icons/io5";
import { Stack } from "@chakra-ui/react";
import InfoCard from "../Dashboard/components/InfoCard";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      {" "}
      <Stack spacing="80px">
        {" "}
        <SupportCard
          icon={IoMdMail}
          leftcomponent={<ContactCard />}
          title="Contact US"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={IoChatboxOutline}
          leftcomponent={
            <InfoCard
              inverted={true}
              imgUrl="/grid_bg.svg"
              text="Chat with us now"
              tagText="Chatbot"
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
