using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class v3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "HealthPointsId",
                table: "Characters",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "HealthPoints",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Current = table.Column<int>(type: "integer", nullable: false),
                    Max = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthPoints", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Characters_HealthPointsId",
                table: "Characters",
                column: "HealthPointsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_HealthPoints_HealthPointsId",
                table: "Characters",
                column: "HealthPointsId",
                principalTable: "HealthPoints",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_HealthPoints_HealthPointsId",
                table: "Characters");

            migrationBuilder.DropTable(
                name: "HealthPoints");

            migrationBuilder.DropIndex(
                name: "IX_Characters_HealthPointsId",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "HealthPointsId",
                table: "Characters");
        }
    }
}
