import { useWindowVirtualizer } from '@tanstack/react-virtual';

interface VirtualizedListContainerProps {
  itemCount: number;
  estimatedItemSize: number;
  overscan?: number;
  children: (virtualItems: any[]) => React.ReactNode;
}

const VirtualizedListContainer = ({
  itemCount,
  estimatedItemSize,
  overscan = 5,
  children,
}: VirtualizedListContainerProps) => {
  const virtualizer = useWindowVirtualizer({
    count: itemCount,
    estimateSize: () => estimatedItemSize,
    overscan,
  });

  return (
    <div
      style={{
        height: virtualizer.getTotalSize(),
        width: '100%',
        position: 'relative',
      }}
    >
      {children(virtualizer.getVirtualItems())}
    </div>
  );
};

export default VirtualizedListContainer;
