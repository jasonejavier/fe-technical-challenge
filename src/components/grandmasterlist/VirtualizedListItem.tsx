interface VirtualListItemProps {
  virtualItem: any;
  children: React.ReactNode;
}

const VirtualListItem = ({ virtualItem, children }: VirtualListItemProps) => {
  return (
    <div
      key={virtualItem.key}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${virtualItem.size}px`,
        transform: `translateY(${virtualItem.start}px)`,
      }}
      className="px-0 py-2"
    >
      {children}
    </div>
  );
};

export default VirtualListItem;
