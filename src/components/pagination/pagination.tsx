import ResponsivePagination, {
  ResponsivePaginationProps,
} from "react-responsive-pagination";
import "react-responsive-pagination/themes/minimal.css";

export function Pagination({
  current,
  total,
  onPageChange,
}: ResponsivePaginationProps) {
  return (
    <ResponsivePagination
      current={current}
      total={total}
      onPageChange={onPageChange}
      pageLinkClassName="page-link !bg-inherit !text-neutral-500"
      activeItemClassName="page-item active rounded !bg-neutral-300"
    />
  );
}
