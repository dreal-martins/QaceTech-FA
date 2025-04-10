import { RowData } from "@/components/table/tableData";

export type homeDataProps = {
  title: string;
  label: string;
  route: string;
  all: string;
  active: string;
  liquidated: string;
  tableData: RowData[];
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};
