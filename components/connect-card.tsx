import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  onClick: () => void;
};

export const ConnectCard = ({ onClick }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Connect to your bank
        </CardTitle>
        <CardDescription>
          Connect your bank account to get started
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={onClick} className="w-full">
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
};
