import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';

export interface InvitedUser {
  id: string;
  email: string;
  role: string;
  status: 'pending' | 'accepted' | 'expired';
  invitedAt: string;
}

interface CreateColumnsParams {
  theme: string;
  getStatusColor: (status: string) => string;
}

export const createInvitedUsersColumns = ({
  theme,
  getStatusColor,
}: CreateColumnsParams): ColumnDef<InvitedUser>[] => [
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => (
      <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {row.getValue('email')}
      </div>
    ),
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.getValue('role') as string;
      return (
        <Badge
          variant="outline"
          className={`capitalize ${
            theme === 'dark'
              ? 'bg-zinc-800 border-zinc-700 text-zinc-300'
              : 'bg-gray-100 border-gray-300 text-gray-700'
          }`}
        >
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <Badge
          variant="outline"
          className={`capitalize ${getStatusColor(status)}`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'invitedAt',
    header: 'Invited At',
    cell: ({ row }) => (
      <div className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
        {row.getValue('invitedAt')}
      </div>
    ),
  },
];
